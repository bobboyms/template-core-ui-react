import React from "react";
import ReactDOM from "react-dom";
import Cliente from "./cliente";
import Funcionario from "./funcionario";
import {HashRouter, Route, Link, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import TelaLogin from "./Login";
import controleUsuario from "./controle-usuario/ControleUsuario";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import "./assets/vendors/@coreui/icons/css/coreui-icons.min.css"
import "./assets/vendors/flag-icon-css/css/flag-icon.min.css"
import "./assets/vendors/font-awesome/css/font-awesome.min.css"
import "./assets/vendors/simple-line-icons/css/simple-line-icons.css"
import "./assets/vendors/pace-progress/css/pace.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'

//imports header
import logo from "./assets/img/brand/logo.svg"
import sygnet from "./assets/img/brand/sygnet.svg"
import avatar from "./assets/img/avatars/6.jpg"

import {Button} from 'primereact/button';

import 'script-loader!./assets/vendors/jquery/js/jquery.min.js';
import 'script-loader!./assets/vendors/popper.js/js/popper.min.js';
import 'script-loader!./assets/vendors/bootstrap/js/bootstrap.min.js';
import 'script-loader!./assets/vendors/pace-progress/js/pace.min.js';
import 'script-loader!./assets/vendors/perfect-scrollbar/js/perfect-scrollbar.min.js';
import 'script-loader!./assets/vendors/@coreui/coreui/js/coreui.min.js';


const Body = (props) => {
  return(
    <div className="app-body">{props.children}</div>
  );
}

const Menu = () => {
  return(
    <div className="sidebar">
        <nav className="sidebar-nav ps">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                <i className="nav-icon icon-speedometer"></i> Dashboard
                <span className="badge badge-primary">NEW</span>
              </a>
            </li>
            <li className="nav-title">Theme</li>
            <li className="nav-item">
              <a className="nav-link" href="colors.html">
                <i className="nav-icon icon-drop"></i> Colors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="typography.html">
                <i className="nav-icon icon-pencil"></i> Typography</a>
            </li>
            <li className="nav-title">Components</li>
            <li className="nav-item nav-dropdown open">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-puzzle"></i> Base</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link className="nav-link" to="/cliente">
                    <i className="nav-icon icon-puzzle"></i> Cliente</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">
                    <i className="nav-icon icon-puzzle"></i> Principal</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/carousel.html">
                    <i className="nav-icon icon-puzzle"></i> Carousel</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/collapse.html">
                    <i className="nav-icon icon-puzzle"></i> Collapse</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/forms.html">
                    <i className="nav-icon icon-puzzle"></i> Forms</a>
                </li>
                <li className="nav-item open">
                  <a className="nav-link active" href="base/jumbotron.html">
                    <i className="nav-icon icon-puzzle"></i> Jumbotron</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/list-group.html">
                    <i className="nav-icon icon-puzzle"></i> List group</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/navs.html">
                    <i className="nav-icon icon-puzzle"></i> Navs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/pagination.html">
                    <i className="nav-icon icon-puzzle"></i> Pagination</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/popovers.html">
                    <i className="nav-icon icon-puzzle"></i> Popovers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/progress.html">
                    <i className="nav-icon icon-puzzle"></i> Progress</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/scrollspy.html">
                    <i className="nav-icon icon-puzzle"></i> Scrollspy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/switches.html">
                    <i className="nav-icon icon-puzzle"></i> Switches</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tables.html">
                    <i className="nav-icon icon-puzzle"></i> Tables</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tabs.html">
                    <i className="nav-icon icon-puzzle"></i> Tabs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="base/tooltips.html">
                    <i className="nav-icon icon-puzzle"></i> Tooltips</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-cursor"></i> Buttons</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="buttons/buttons.html">
                    <i className="nav-icon icon-cursor"></i> Buttons</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/button-group.html">
                    <i className="nav-icon icon-cursor"></i> Buttons Group</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/dropdowns.html">
                    <i className="nav-icon icon-cursor"></i> Dropdowns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="buttons/brand-buttons.html">
                    <i className="nav-icon icon-cursor"></i> Brand Buttons</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="nav-icon icon-pie-chart"></i> Charts</a>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-star"></i> Icons</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="icons/coreui-icons.html">
                    <i className="nav-icon icon-star"></i> CoreUI Icons
                    <span className="badge badge-success">NEW</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/flags.html">
                    <i className="nav-icon icon-star"></i> Flags</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/font-awesome.html">
                    <i className="nav-icon icon-star"></i> Font Awesome
                    <span className="badge badge-secondary">4.7</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="icons/simple-line-icons.html">
                    <i className="nav-icon icon-star"></i> Simple Line Icons</a>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-bell"></i> Notifications</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="notifications/alerts.html">
                    <i className="nav-icon icon-bell"></i> Alerts</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/badge.html">
                    <i className="nav-icon icon-bell"></i> Badge</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="notifications/modals.html">
                    <i className="nav-icon icon-bell"></i> Modals</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="widgets.html">
                <i className="nav-icon icon-calculator"></i> Widgets
                <span className="badge badge-primary">NEW</span>
              </a>
            </li>
            <li className="divider"></li>
            <li className="nav-title">Extras</li>
            <li className="nav-item nav-dropdown">
              <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-star"></i> Pages</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <a className="nav-link" href="login.html" target="_top">
                    <i className="nav-icon icon-star"></i> Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="register.html" target="_top">
                    <i className="nav-icon icon-star"></i> Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="404.html" target="_top">
                    <i className="nav-icon icon-star"></i> Error 404</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="500.html" target="_top">
                    <i className="nav-icon icon-star"></i> Error 500</a>
                </li>
              </ul>
            </li>
            
          </ul>
        <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}></div></div></nav>
        <button className="sidebar-minimizer brand-minimizer" type="button"></button>
      </div>
  );
}

const Header = () => {
    return(
        <div className="app-header navbar">
      <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        <img className="navbar-brand-full" src={logo} width="89" height="25" alt="CoreUI Logo" />
        <img className="navbar-brand-minimized" src={sygnet} width="30" height="30" alt="CoreUI Logo" />
      </a>
      <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="nav navbar-nav d-md-down-none">
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Users</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Settings</a>
        </li>
      </ul>
      <ul className="nav navbar-nav ml-auto">
        <li className="nav-item d-md-down-none">
          <a className="nav-link" href="#">
            <i className="icon-bell"></i>
            <span className="badge badge-pill badge-danger">5</span>
          </a>
        </li>
        <li className="nav-item d-md-down-none">
          <a className="nav-link" href="#">
            <i className="icon-list"></i>
          </a>
        </li>
        <li className="nav-item d-md-down-none">
          <a className="nav-link" href="#">
            <i className="icon-location-pin"></i>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com" />
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <div className="dropdown-header text-center">
              <strong>Account</strong>
            </div>
            <a className="dropdown-item" href="#">
              <i className="fa fa-bell-o"></i> Updates
              <span className="badge badge-info">42</span>
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-envelope-o"></i> Messages
              <span className="badge badge-success">42</span>
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-tasks"></i> Tasks
              <span className="badge badge-danger">42</span>
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-comments"></i> Comments
              <span className="badge badge-warning">42</span>
            </a>
            <div className="dropdown-header text-center">
              <strong>Settings</strong>
            </div>
            <a className="dropdown-item" href="#">
              <i className="fa fa-user"></i> Profile</a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-wrench"></i> Settings</a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-usd"></i> Payments
              <span className="badge badge-secondary">42</span>
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-file"></i> Projects
              <span className="badge badge-primary">42</span>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <i className="fa fa-shield"></i> Lock Account</a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-lock"></i> Logout</a>
          </div>
        </li>
      </ul>
      <button className="navbar-toggler aside-menu-toggler d-md-down-none" type="button" data-toggle="aside-menu-lg-show">
        <span className="navbar-toggler-icon"></span>
      </button>
      <button className="navbar-toggler aside-menu-toggler d-lg-none" type="button" data-toggle="aside-menu-show">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    );
}


const Aside = () => {
  return(
    <div className="aside-menu">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#timeline" role="tab">
              <i className="icon-list"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#messages" role="tab">
              <i className="icon-speech"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#settings" role="tab">
              <i className="icon-settings"></i>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="timeline" role="tabpanel">
            <div className="list-group list-group-accent">
              <div className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today</div>
              <div className="list-group-item list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                </div>
                <div>Meeting with
                  <strong>Lucas</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>
                <small className="text-muted">
                  <i className="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>
              </div>
              <div className="list-group-item list-group-item-accent-info">
                <div className="avatar float-right">
                  <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                </div>
                <div>Skype with
                  <strong>Megan</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 4 - 5pm</small>
                <small className="text-muted">
                  <i className="icon-social-skype"></i>&nbsp; On-line</small>
              </div>
              <div className="list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Tomorrow</div>
              <div className="list-group-item list-group-item-accent-danger list-group-item-divider">
                <div>New UI Project -
                  <strong>deadline</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 10 - 11pm</small>
                <small className="text-muted">
                  <i className="icon-home"></i>&nbsp; creativeLabs HQ</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com" />
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                </div>
              </div>
              <div className="list-group-item list-group-item-accent-success list-group-item-divider"/>
                <div>
                  <strong>#10 Startups.Garden</strong> Meetup</div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>
                <small className="text-muted">
                  <i className="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>
              </div>
              <div className="list-group-item list-group-item-accent-primary list-group-item-divider">
                <div>
                  <strong>Team meeting</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 4 - 6pm</small>
                <small className="text-muted">
                  <i className="icon-home"></i>&nbsp; creativeLabs HQ</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                  <div className="avatar avatar-xs">
                    <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane p-3" id="messages" role="tabpanel">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
            <hr/>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
            <hr/>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
            <hr/>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
            <hr/>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img className="img-avatar" src={avatar} alt="admin@bootstrapmaster.com"/>
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Lorem ipsum dolor sit amet</div>
              <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>
            </div>
          </div>
          <div className="tab-pane p-3" id={avatar} role="tabpanel">
            <h6>Settings</h6>
            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Option 1</b>
                </small>
                <label className="switch switch-label switch-pill switch-success switch-sm float-right">
                  <input className="switch-input" type="checkbox"/>
                  <span className="switch-slider" data-checked="On" data-unchecked="Off"></span>
                </label>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
              </div>
            </div>
            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 2</b>
                </small>
                <label className="switch switch-label switch-pill switch-success switch-sm float-right">
                  <input className="switch-input" type="checkbox"/>
                  <span className="switch-slider" data-checked="On" data-unchecked="Off"></span>
                </label>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
              </div>
            </div>
            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 3</b>
                </small>
                <label className="switch switch-label switch-pill switch-success switch-sm float-right">
                  <input className="switch-input" type="checkbox"/>
                  <span className="switch-slider" data-checked="On" data-unchecked="Off"></span>
                </label>
              </div>
            </div>
            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 4</b>
                </small>
                <label className="switch switch-label switch-pill switch-success switch-sm float-right">
                  <input className="switch-input" type="checkbox"/>
                  <span className="switch-slider" data-checked="On" data-unchecked="Off"></span>
                </label>
              </div>
            </div>
            <hr/>
            <h6>System Utilization</h6>
            <div className="text-uppercase mb-1 mt-4">
              <small>
                <b>CPU Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-info" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">348 Processes. 1/4 Cores.</small>
            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>Memory Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">11444GB/16384MB</small>
            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 1 Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">243GB/256GB</small>
            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 2 Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-success" role="progressbar" style={{width: "10%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">25GB/256GB</small>
          </div>
        </div>
  );
}

const Main = (props) => {
    return(
      <div className="main">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item">
            <a href="#">Admin</a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
          <li className="breadcrumb-menu d-md-down-none">
            <div className="btn-group" role="group" aria-label="Button group">
              <a className="btn" href="#">
                <i className="icon-speech"></i>
              </a>
              <a className="btn" href="./">
                <i className="icon-graph"></i> &nbsp;Dashboard</a>
              <a className="btn" href="#">
                <i className="icon-settings"></i> &nbsp;Settings</a>
            </div>
          </li>
        </ol>
        <div className="container-fluid">
          <div className="animated fadeIn">
            <div className="row">
               
               {props.children}

            </div>
          </div>
        </div>
    </div>
    )
}



class Index extends React.Component  {
    
  constructor(props) {
    super(props);
  }

  
  logar = (usuario, senha) => {
    controleUsuario.logar(usuario,senha);
    this.setState({logado:true})
  }

      render() {

        let rota = <Switch>
            <Route path="/" exact component={() => {
              return (<Funcionario />)
            }} />
            <Route path="/cliente" component={Cliente} />
            <Redirect to="/" />
        </Switch>

        if (!controleUsuario.logado()) {
          rota = <Switch>
            <Route path="/" exact component={() => {
              return (<TelaLogin logar={this.logar} />)
            }} />
          </Switch>
        }

        if (controleUsuario.logado()) {
          return (
            <span>
              <Header />
              <Body>
                <Menu />
                <Aside />
                <Main >
                  {rota}
                </Main>
              </Body>
            </span>
          )
        } else {
          return(
            <span>
              {rota}
            </span>
          )
        }

          
    }
}

class Rotas extends React.Component {
  constructor(props) {
    super(props);
  }

  logar = (usuario, senha) => {
    controleUsuario.logar(usuario, senha)

    console.log(controleUsuario.logado())

    this.setState({logado:true})


  }

  render() {
    
    return(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    )
  }
}

controleUsuario

ReactDOM.render(<Rotas />, document.getElementById("index"));






//Referencia
//http://docs.w3cub.com/webpack/loaders/script-loader/
