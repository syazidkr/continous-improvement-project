"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

const Calendar = () => {
  return (
    <div className="h-screen"> {/* contoh pakai Tailwind */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridDay"
        weekends={true}
        nowIndicator={true}
        titleFormat={{ year: 'numeric', month: 'long' }}
        headerToolbar={{
          left: "prev",
          right: "next",
          center: "title",
        }}
        height="90%"     // penuh sesuai container
        // height={600}   // atau pakai angka pixel
      />
      <style jsx global>{`
        .fc-toolbar-title {
          font-size: 0.75rem;
          font-weight: normal;
          color: #004866;
        }
      `}</style>
    </div>
  )
}

export default Calendar