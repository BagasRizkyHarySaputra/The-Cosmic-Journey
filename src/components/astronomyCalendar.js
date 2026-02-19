import React from 'react';
import '../static/css/astronomyCalendar.css';
import SidebarHome from './sidebarHome';
import { getCalendarGrid, useCalendarMonth, isSpecialDate, specialDates2025 } from '../static/js/astronomyCalendarjs';

function AstronomyCalendar() {
  const { month, year, monthNames, handlePrevMonth, handleNextMonth } = useCalendarMonth();
  const grid = getCalendarGrid(year, month);
  const [activeSpecial, setActiveSpecial] = React.useState(null);
  const hideUI = !!activeSpecial;

  // Get special date data if active
  let specialData = null;
  let specialIdx = -1;
  if (hideUI && activeSpecial) {
    specialIdx = specialDates2025.findIndex(
      d => d.day === activeSpecial.day && d.month === activeSpecial.month
    );
    specialData = specialDates2025[specialIdx];
  }

  // Handler for next special date
  const handleNextSpecial = () => {
    if (specialIdx !== -1) {
      const nextIdx = (specialIdx + 1) % specialDates2025.length;
      const next = specialDates2025[nextIdx];
      setActiveSpecial({ day: next.day, month: next.month });
    }
  };

  // Handler for previous special date
  const handlePrevSpecial = () => {
    if (specialIdx !== -1) {
      const prevIdx = (specialIdx - 1 + specialDates2025.length) % specialDates2025.length;
      const prev = specialDates2025[prevIdx];
      setActiveSpecial({ day: prev.day, month: prev.month });
    }
  };

  return (
    <section className="astronomy-calendar-page">
      <SidebarHome />
      <img
        src={process.env.PUBLIC_URL + '/Astronomy Calendar/icon.svg'}
        alt="Back"
        className="back cursor-target"
        onClick={() => {
          if (activeSpecial) {
            setActiveSpecial(null);
          } else {
            const eventsLink = document.getElementById('header-events-link');
            if (eventsLink) {
              eventsLink.click();
            }
          }
        }}
      />
      <div className="calendar-title">Astronomy Calendar</div>
      {/* Left Arrow */}
      {!hideUI && (
        <img
          src={process.env.PUBLIC_URL + '/Astronomy Calendar/panahKanan.svg'}
          alt="Previous Month"
          className="calendar-arrow calendar-arrow-left"
          onClick={handlePrevMonth}
        />
      )}
      {/* Right Arrow */}
      {!hideUI && (
        <img
          src={process.env.PUBLIC_URL + '/Astronomy Calendar/panahKanan.svg'}
          alt="Next Month"
          className="calendar-arrow calendar-arrow-right"
          onClick={handleNextMonth}
        />
      )}
      <div className={hideUI ? "calendar-square active" : "calendar-square"}>
        <div className={hideUI ? "calendar-box calendar-box-left active" : "calendar-box calendar-box-left"}>
          <span className="calendar-box-text">{monthNames[hideUI ? activeSpecial.month : month]}</span>
        </div>
        <div className={hideUI ? "calendar-box calendar-box-right active" : "calendar-box calendar-box-right"}>
          <span className="calendar-box-text">{year}</span>
        </div>
        {/* 7x5 grid of small boxes inside calendar-square */}
        {!hideUI && (
          <div className="calendar-grid-container">
            {grid.map((week, rowIdx) => (
              <div className="calendar-grid-row-wrapper" key={rowIdx}>
                <div className="calendar-grid-row">
                  {week.map((date, colIdx) => (
                    <div
                      className="calendar-grid-box"
                      key={colIdx}
                      onClick={() => {
                        if (date && isSpecialDate(date, month)) {
                          setActiveSpecial({ day: date, month });
                        }
                      }}
                    >
                      {date && isSpecialDate(date, month) && (
                        <span className="calendar-grid-circle"></span>
                      )}
                      {date && <span className="calendar-grid-date">{date}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Active state: show special date info from data */}
        {hideUI && specialData && (
          <div className="calendar-active-content" style={{ position: 'relative', width: '100%' }}>
            {/* Previous special date arrow */}
            {/* Next special date arrow */}
                <img
                  src={process.env.PUBLIC_URL + '/Astronomy Calendar/panahKanan.svg'}
                  alt="Previous Special Date"
                  className="calendar-arrow special-arrow-left"
                  onClick={handlePrevSpecial}
                />
                {/* Next special date arrow */}
                <img
                  src={process.env.PUBLIC_URL + '/Astronomy Calendar/panahKanan.svg'}
                  alt="Next Special Date"
                  className="calendar-arrow special-arrow-right"
                  onClick={handleNextSpecial}
                />
            <div className="calendar-active-box">
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 className='calendar-active-box-title'>{specialData.title}</h1>
                <div className="calendar-active-box-info">
                  <img 
                    src={process.env.PUBLIC_URL + '/Astronomy Calendar/' + specialData.img}
                    alt={specialData.title}
                    className="calendar-active-box-img"
                  />
                  <span className="calendar-active-box-desc">
                    {specialData.desc}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AstronomyCalendar;
