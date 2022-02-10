import '../styles/main.css'
import 'boxicons'

const Main = () => {
  return (
    <div>
      <aside>
        <div className='logo'>
          <span className='menu-icon'>
            <i className='bx bx-menu'></i>
            <i className='bx bx-x'></i>
          </span>
          <a href='#'>
            <img src='maxion.png' alt='' />
            <span>CODINGCTEATE</span>
          </a>
        </div>
        <ul className='side-menu'>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bxs-dashboard'></i>
              <span>Dashboard</span>
              <i className='bx bxs-chevron-right'></i>
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='#'>Dashboard_1</a>
              </li>
              <li>
                <a href='#'>Dashboard_2</a>
              </li>
              <li>
                <a href='#'>Dashboard_3</a>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bxs-inbox'></i>
              <span>Inbox</span>
            </a>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bx-cube'></i>
              <span>Widgets</span>
            </a>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bx-folder-open'></i>
              <span>Files</span>
            </a>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bx-copy'></i>
              <span>Icons</span>
              <i className='bx bxs-chevron-right'></i>
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='#'>Fontwasome</a>
              </li>
              <li>
                <a href='#'>Boxicons</a>
              </li>
              <li>
                <a href='#'>Ionicons</a>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bx-lock-alt'></i>
              <span>Authentictions</span>
            </a>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bxs-analyse'></i>
              <span>Analysis</span>
            </a>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bx-user'></i>
              <span>User Page</span>
              <i className='bx bxs-chevron-right'></i>
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='#'>Admin</a>
              </li>
              <li>
                <a href='#'>Developers</a>
              </li>
              <li>
                <a href='#'>Guests</a>
              </li>
            </ul>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bxs-magnet'></i>
              <span>UI Elements</span>
            </a>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bx-line-chart'></i>
              <span>Charts</span>
            </a>
          </li>
          <li className='nav-item'>
            <a href='#'>
              <i className='bx bx-log-out'></i>
              <span>Log out</span>
            </a>
          </li>
        </ul>
      </aside>
      <section>
        <h1>Components</h1>
        <h2>Sidebar In Javascript</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum quos sequi esse architecto sed ratione
          tempora totam omnis! Repellat quisquam accusantium laborum voluptatum tenetur officiis quibusdam esse ipsam
          harum.
        </p>
      </section>
    </div>
  )
}
export default Main
