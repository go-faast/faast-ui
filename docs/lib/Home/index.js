import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import Example from '../examples/import-basic';

const importBasic = require('!!raw!../examples/import-basic');

export default () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-center mb-3">
        <Container>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.svg" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">faast-ui</h1>
              <p className="lead">
                Custom Bootstrap 4 theme and React component library for faa.st
              </p>
              <p>
                <Button outline color="danger" href="https://github.com/go-faast/faast-ui">View on Github</Button>
                <Button color="danger" tag={Link} to="/components/">View Components</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm={8}>
            <h2>Installation</h2>
            <hr />
            <h3 className="mt-5">NPM</h3>
            <p>Install faast-ui and peer dependencies via NPM</p>
            <pre>
              <PrismCode className="language-bash">npm install --save go-faast/faast-ui reactstrap react react-dom</PrismCode>
            </pre>
            <p>Import faast-ui CSS somewhere in in the entrypoint of your app (e.g. <code>src/index.js</code> for create-react-app):</p>
            <pre>
              <PrismCode className="language-jsx">import 'faast-ui/dist/css/faast-ui.css'</PrismCode>
            </pre>
            <p>or, directly import in your scss to have access to all bootstrap variables and mixins:</p>
            <pre>
              <PrismCode className="language-scss">@import '~faast-ui/src/style/index.scss';</PrismCode>
            </pre>
            <p>Import the components you need</p>
            <div className="docs-example">
              <Example />
            </div>
            <pre>
              <PrismCode className="language-jsx">
                {importBasic}
              </PrismCode>
            </pre>
            <h3 className="mt-5">Getting Started with Create React App</h3>
            <p>Follow the <a href="https://github.com/facebookincubator/create-react-app#getting-started" target="_blank">create-react-app instructions</a> up to the <code>Adding Bootstrap</code> section and instead follow the faast-ui version of adding bootstrap.</p>
            <h4>tl;dr</h4>
            <pre>
              <PrismCode className="language-bash">
{`npm install -g create-react-app

create-react-app my-app
cd my-app/
npm start`}
              </PrismCode>
            </pre>
            <p>
              Then open <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> to see your app. The initial structure of your app is setup. Next, let's add faast-ui and reactstrap.
            </p>
            <h4>Adding Bootstrap</h4>
            <p>Install faast-ui and reactstrap from NPM. Reactstrap normally requires Bootstrap CSS, but faast-ui includes a custom Bootstrap theme that should be used instead:</p>
            <pre>
              <PrismCode className="language-bash">
  {`npm install faast-ui --save
npm install --save reactstrap react react-dom`}
              </PrismCode>
            </pre>
            <p>Import faast-ui CSS in the <code>src/index.js</code> file:</p>
            <pre>
              <PrismCode className="language-bash">import 'faast-ui/dist/style.css';</PrismCode>
            </pre>
            <p>Import required reactstrap components within <code>src/App.js</code> file or your custom component files:</p>
            <pre>
              <PrismCode className="language-bash">
                {`import { Button } from 'reactstrap';`}
              </PrismCode>
            </pre>
            <p>Now you are ready to use the imported reactstrap components within your component hierarchy defined in the render method. Here is an example <a href="https://gist.github.com/eddywashere/e13033c0e655ab7cda995f8bc77ce40d" target="_blank"><code>App.js</code></a> redone using reactstrap.</p>
            <h2 className="mt-5">About the Project</h2>
            <hr />
            <p>This library contains a Bootstrap 4 theme and custom React components based on reactstrap.</p>
            <h3 className="mt-5">About Reactstrap</h3>
            <p>Reactstrap contains React Bootstrap 4 components that favor composition and control. It does not depend on jQuery or Bootstrap javascript. However, <a href="https://popper.js.org/">https://popper.js.org/</a> via <a href="https://github.com/souporserious/react-popper">https://github.com/souporserious/react-popper</a> is relied upon for advanced positioning of content like Tooltips, Popovers, and auto-flipping Dropdowns.</p>
            <p>There are a few core concepts to understand in order to make the most out of reactstrap.</p>
            <p>1) Your content is expected to be composed via props.children rather than using named props to pass in Components.</p>
            <pre>
              <PrismCode className="language-jsx">
{`// Content passed in via props
const Example = (props) => {
  return (
    <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
  );
}

// Content passed in as children (Preferred)
const PreferredExample = (props) => {
  return (
    <p>
      This is a <a href="#" id="TooltipExample">tooltip</a> example.
      <Tooltip target="TooltipExample">
        <TooltipContent/>
      </Tooltip>
    </p>
  );
}`}
              </PrismCode>
            </pre>
            <p>
              2) Attributes in this library are used to pass in state, conveniently apply modifier classes, enable advanced functionality (like popperjs), or automatically include non-content based elements.
            </p>
            <p>Examples:</p>
            <ul>
              <li><code>isOpen</code> - current state for items like dropdown, popover, tooltip</li>
              <li><code>toggle</code> - callback for toggling isOpen in the controlling component</li>
              <li><code>color</code> - applies color classes, ex: <code>{'<Button color="danger"/>'}</code></li>
              <li><code>size</code> for controlling size classes. ex: <code>{'<Button size="sm"/>'}</code></li>
              <li><code>tag</code> - customize component output by passing in an element name or Component</li>
              <li>boolean based props (attributes) when possible for alternative style classes or sr-only content</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
