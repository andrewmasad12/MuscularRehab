import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../SectionHeader'
import { fadeUp, viewport } from './sectionMotion'

export default function BookingFlowSection({ config }) {
  const [selectedSession, setSelectedSession] = React.useState(config.bookingFlow.sessions[0])
  const [selectedDate, setSelectedDate] = React.useState(() => new Date().toISOString().slice(0, 10))
  const [slots, setSlots] = React.useState([])
  const [selectedSlot, setSelectedSlot] = React.useState('')
  const [client, setClient] = React.useState({ name: '', email: '', phone: '', notes: '' })
  const [status, setStatus] = React.useState({ state: 'idle', message: '' })

  const maxDate = React.useMemo(() => {
    const date = new Date()
    date.setDate(date.getDate() + config.bookingFlow.bookingWindowDays)
    return date.toISOString().slice(0, 10)
  }, [config.bookingFlow.bookingWindowDays])

  React.useEffect(() => {
    let ignore = false

    async function loadSlots() {
      setStatus({ state: 'loading', message: 'Checking live calendar availability...' })
      setSelectedSlot('')

      try {
        const response = await fetch(`/api/availability?date=${selectedDate}&sessionId=${selectedSession.id}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Unable to load availability.')
        }

        if (!ignore) {
          setSlots(data.slots)
          setStatus({
            state: data.setupRequired ? 'setup' : 'ready',
            message: data.setupRequired
              ? 'Calendar sync needs Google API credentials before bookings can be confirmed.'
              : data.slots.length
                ? 'Select one of the available times below.'
                : 'No open times for this date. Try another day.',
          })
        }
      } catch (error) {
        if (!ignore) {
          setSlots([])
          setStatus({ state: 'error', message: error.message })
        }
      }
    }

    loadSlots()

    return () => {
      ignore = true
    }
  }, [selectedDate, selectedSession.id])

  async function submitBooking(event) {
    event.preventDefault()

    if (!selectedSlot) {
      setStatus({ state: 'error', message: 'Choose an available time before confirming.' })
      return
    }

    setStatus({ state: 'loading', message: 'Creating your calendar booking...' })

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: selectedSession.id,
          start: selectedSlot,
          client,
        }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Unable to create booking.')
      }

      setStatus({
        state: 'success',
        message: `Booked. A Google Calendar confirmation was sent to ${client.email}.`,
      })
      setSelectedSlot('')
      setClient({ name: '', email: '', phone: '', notes: '' })
    } catch (error) {
      setStatus({ state: 'error', message: error.message })
    }
  }

  return (
    <section id="booking" className="section bg-stone-100 text-stone-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Book online"
              title={config.bookingFlow.title}
              body={config.bookingFlow.body}
            />

            <div className="mt-8 grid gap-3">
              {config.bookingFlow.steps.map((step, index) => (
                <div key={step} className="flex items-center gap-4 border-b border-stone-300 pb-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-stone-950 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="font-medium text-stone-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="grid gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="grid gap-3 md:grid-cols-3">
              {config.bookingFlow.sessions.map((session) => {
                const isSelected = selectedSession.name === session.name

                return (
                  <button
                    key={session.name}
                    type="button"
                    onClick={() => setSelectedSession(session)}
                    className={`rounded-lg border p-5 text-left transition ${
                      isSelected
                        ? 'border-teal-500 bg-white shadow-lg shadow-stone-200'
                        : 'border-stone-300 bg-white/70 hover:border-stone-500'
                    }`}
                  >
                    <span className="text-xs uppercase tracking-[0.18em] text-teal-700">{session.duration}</span>
                    <h3 className="mt-4 text-lg font-semibold">{session.name}</h3>
                    <p className="mt-2 text-sm font-medium text-stone-500">{session.price}</p>
                    <p className="mt-4 text-sm leading-6 text-stone-600">{session.description}</p>
                  </button>
                )
              })}
            </div>

            <form onSubmit={submitBooking} className="overflow-hidden rounded-lg border border-stone-300 bg-white">
              <div className="grid gap-5 border-b border-stone-200 p-5 md:grid-cols-[1fr_0.8fr] md:items-end">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Selected session</p>
                  <p className="mt-2 text-xl font-semibold">{selectedSession.name}</p>
                  <p className="mt-2 text-sm text-stone-500">
                    {selectedSession.duration} | {selectedSession.price}
                  </p>
                </div>
                <label className="grid gap-2 text-sm font-medium text-stone-700">
                  Choose a date
                  <input
                    type="date"
                    min={new Date().toISOString().slice(0, 10)}
                    max={maxDate}
                    value={selectedDate}
                    onChange={(event) => setSelectedDate(event.target.value)}
                    className="h-12 rounded-md border border-stone-300 bg-white px-4 text-stone-950 outline-none focus:border-teal-600"
                  />
                </label>
              </div>

              <div className="grid gap-6 p-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Available times</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
                    {slots.map((slot) => (
                      <button
                        key={slot.start}
                        type="button"
                        onClick={() => setSelectedSlot(slot.start)}
                        className={`rounded-md border px-4 py-3 text-sm font-semibold transition ${
                          selectedSlot === slot.start
                            ? 'border-stone-950 bg-stone-950 text-white'
                            : 'border-stone-300 bg-stone-50 text-stone-800 hover:border-teal-600'
                        }`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                  {!slots.length && (
                    <p className="mt-4 rounded-md bg-stone-100 p-4 text-sm leading-6 text-stone-600">
                      {status.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-medium text-stone-700">
                      Name
                      <input
                        required
                        value={client.name}
                        onChange={(event) => setClient({ ...client, name: event.target.value })}
                        className="h-12 rounded-md border border-stone-300 px-4 outline-none focus:border-teal-600"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="grid gap-2 text-sm font-medium text-stone-700">
                      Email
                      <input
                        required
                        type="email"
                        value={client.email}
                        onChange={(event) => setClient({ ...client, email: event.target.value })}
                        className="h-12 rounded-md border border-stone-300 px-4 outline-none focus:border-teal-600"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>
                  <label className="grid gap-2 text-sm font-medium text-stone-700">
                    Phone
                    <input
                      value={client.phone}
                      onChange={(event) => setClient({ ...client, phone: event.target.value })}
                      className="h-12 rounded-md border border-stone-300 px-4 outline-none focus:border-teal-600"
                      placeholder="Best contact number"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-stone-700">
                    Session notes
                    <textarea
                      value={client.notes}
                      onChange={(event) => setClient({ ...client, notes: event.target.value })}
                      className="min-h-28 rounded-md border border-stone-300 p-4 outline-none focus:border-teal-600"
                      placeholder="Goals, schedule notes, or anything helpful before the session"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={status.state === 'loading'}
                    className="btn btn-primary justify-center bg-stone-950 text-white hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Confirm Booking
                  </button>
                  {status.message && (
                    <p
                      className={`rounded-md p-4 text-sm leading-6 ${
                        status.state === 'error' || status.state === 'setup'
                          ? 'bg-amber-100 text-amber-950'
                          : status.state === 'success'
                            ? 'bg-emerald-100 text-emerald-950'
                            : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
