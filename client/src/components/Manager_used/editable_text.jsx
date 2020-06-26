import React from 'react';
import "./editable_text.css";

export default class EditableText extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        name: props.name,
        type: props.type||'text',
        value: props.value||'',
        editClassName: props.editClassName,
        edit: false
      }
    }
    edit() {
      this.setState({edit:edit!==false})
    }
    render() {
      return (
       <div className="list-section" >
         <h1><span>無標籤</span></h1>
          <ul className="list">
            <li className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <span className="id" >yhunTN41Rwipat7Cm7LnXg</span>
              <div className="overview-card-container has-menu">
                <a className="card-anchor" href="https://hackmd.io/yhunTN41Rwipat7Cm7LnXg"></a>
                <div className="item">
                  <div className="content">
                      <a href="https://hackmd.io/yhunTN41Rwipat7Cm7LnXg">
                        <h4 className="text flex items-end" title="Untitled">
                          <span className="title">Untitled</span>
                        </h4>
                      </a>
                      <a href="https://hackmd.io/yhunTN41Rwipat7Cm7LnXg">
                        <p className="time" title="2020年6月25日星期四 02:15">
                          <i><i className="fa fa-clock-o"></i> 變更於 </i>
                          <i className="fromNow">6 小時前</i>
                        </p>
                      </a>
                      <div className="status-indicators bottom-right-items">
                        <a className="indicator-icon" title="" data-placement="bottom" data-toggle="tooltip" href="https://hackmd.io/@jerry0129/Hy5BOf-AU" data-original-title="以瀏覽模式開啟">
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </a>
                      </div>
                      <a href="https://hackmd.io/yhunTN41Rwipat7Cm7LnXg">
                        <p className="tags"></p>
                      </a>
                  </div>
                  <div className="overview-card-menu-container">
                    <div className="overview-card-menu menu-component">
                      <i className="ui-ellipsis"></i>
                      <div className="menu-container base-menu position-left position-bottom absolute" >
                        <div className="menu-item danger" >
                          <i className="fa fa-trash fa-fw menu-fa-icon" ></i>刪除此筆記
                        </div>
                        <a className="menu-item" href="https://hackmd.io/@jerry0129/Hy5BOf-AU" >
                          <i className="fa fa-eye fa-fw menu-fa-icon" ></i>以瀏覽模式開啟
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )
    }
  }