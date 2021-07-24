import { useContext } from "react";
import { Context } from "../store/appContext";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../css/calendar.css'

const Calendar = () => {
  const { store, actions } = useContext(Context)

  const events = [
    {
      id: 1,
      title: 'event 1',
      start: '2021-06-14T10:00:00',
      end: '2021-06-14T12:00:00',
    },
    {
      id: 2,
      title: 'event 2',
      start: '2021-06-16T13:00:00',
      end: '2021-06-16T18:00:00',
    },
    { id: 3, title: 'event 3', start: '2021-06-17', end: '2021-06-20' },
  ];

  return (
    //   <div className="calendar mt-4"   >


    //       <FullCalendar 
    //   plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    //   initialView="dayGridMonth"
    //   headerToolbar={{
    //     center: 'dayGridMonth,timeGridWeek,timeGridDay new',
    //   }}
    //   customButtons={{
    //     new: {
    //       text: 'new',
    //       click: () => console.log('new event'),
    //     },
    //   }}
    //   events={events}
    //   eventColor="red"
    //   nowIndicator
    //   dateClick={(e) => console.log(e.dateStr)}
    //   eventClick={(e) => console.log(e.event.id)}
    // />


    //   </div>



    <div className="calendar">
      <h1>Agenda</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="agenda"   >
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  center: 'dayGridMonth,timeGridWeek,timeGridDay new',
                }}
                customButtons={{
                  new: {
                    text: 'new',
                    click: () => console.log('new event'),
                  },
                }}
                events={events}
                eventColor="red"
                nowIndicator
                dateClick={(e) => console.log(e.dateStr)}
                eventClick={(e) => console.log(e.event.id)}
              />
            </div>

          </div>

        </div>
        <div className="row">
          <div className="col-4 border">4</div>
          <div className="col-4 border">4</div>
          <div className="col-4 border">4</div>
        </div>
      </div>

    </div>
  );
}

export default Calendar;