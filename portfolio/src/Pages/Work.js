import React from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import '../css/work.css';
import '../css/navmenu.css';

function Work() {
  return (
    <div className='work'>
     
      <div className='work-container'>
        {/* Dropdown button */}
        <Dropdown as={ButtonGroup} className="dropdown-container">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Work Project Links {/* Title of the button */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* GitHub repo link */}
            <Dropdown.Item href="https://github.com/your-repo-link" target="_blank">
              GitHub Repo
            </Dropdown.Item>

            {/* Hosting site link */}
            <Dropdown.Item href="https://your-hosting-link.com" target="_blank">
              Hosting Site
            </Dropdown.Item>

            {/* Description */}
            <Dropdown.ItemText>
              This project includes frontend and backend integration.
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup} className="dropdown-container">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Work Project Links {/* Title of the button */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* GitHub repo link */}
            <Dropdown.Item href="https://github.com/your-repo-link" target="_blank">
              GitHub Repo
            </Dropdown.Item>

            {/* Hosting site link */}
            <Dropdown.Item href="https://your-hosting-link.com" target="_blank">
              Hosting Site
            </Dropdown.Item>

            {/* Description */}
            <Dropdown.ItemText>
              This project includes frontend and backend integration.
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup} className="dropdown-container">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Work Project Links {/* Title of the button */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* GitHub repo link */}
            <Dropdown.Item href="https://github.com/your-repo-link" target="_blank">
              GitHub Repo
            </Dropdown.Item>

            {/* Hosting site link */}
            <Dropdown.Item href="https://your-hosting-link.com" target="_blank">
              Hosting Site
            </Dropdown.Item>

            {/* Description */}
            <Dropdown.ItemText>
              This project includes frontend and backend integration.
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup} className="dropdown-container">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Work Project Links {/* Title of the button */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* GitHub repo link */}
            <Dropdown.Item href="https://github.com/your-repo-link" target="_blank">
              GitHub Repo
            </Dropdown.Item>

            {/* Hosting site link */}
            <Dropdown.Item href="https://your-hosting-link.com" target="_blank">
              Hosting Site
            </Dropdown.Item>

            {/* Description */}
            <Dropdown.ItemText>
              This project includes frontend and backend integration.
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown as={ButtonGroup} className="dropdown-container">
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Work Project Links {/* Title of the button */}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* GitHub repo link */}
            <Dropdown.Item href="https://github.com/your-repo-link" target="_blank">
              GitHub Repo
            </Dropdown.Item>

            {/* Hosting site link */}
            <Dropdown.Item href="https://your-hosting-link.com" target="_blank">
              Hosting Site
            </Dropdown.Item>

            {/* Description */}
            <Dropdown.ItemText>
              This project includes frontend and backend integration.
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Work;
