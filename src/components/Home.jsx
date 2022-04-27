export default function Home () {
  return (
    <div className="home">
      <div className="home_header">
        <h3 className="text_muted">ALEJO SCHLEGEL</h3>
        <h1>JUNIOR SOFTWARE ENGINEER</h1>
      </div>

      <div className="home_body">
      <h2 className="text_muted">SEE MY LASTEST PROJECTS</h2>
      </div>

      <div className="projects_test">

      <div className="project_card_large admin_dashboard">
        <div className="project_info_large">
          <h4>Administrative dashboard</h4>
          <p>An app that provides administrators direct access to important Encompass tools for faster and more convenient community management. The Dashboard serves as an administrative home page with access to key components of your community.</p>
        </div>
      </div>

      <div className="project_card moon_protocool">
        <div className="project_info">
          <h4>Moon protocol</h4>
          <p> A social media that allows users to create, search and buy art. With its corresponding database, payment system, real-time notifications and administrator panel </p>
        </div>
      </div>

      <div className="project_card todo_app">
        <div className="project_info">
          <h4>To Do App</h4>
          <p>App to keep our day-to-day tasks or list everything we have to do, with the most important tasks at the top of the list and the less important tasks at the bottom. It is helpful in planning our daily schedules..</p>
        </div>
      </div>

      <div className="project_card_large weather_app">
        <div className="project_info_large">
          <h4>Weather App</h4>
          <p> Easy and effective way to instantly access forecasts, warnings and other useful weather information. It gives the public unprecedented flexibility: users choose the information they want to see. </p>
        </div>
      </div>

      </div>
    </div>
  )
}