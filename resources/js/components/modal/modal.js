import React, { Component } from 'react';
import {PopupActions} from '../../reducers/action';

class Modal extends Component {
    constructor(props) {
        super(props);
        this._onClickClose = this._onClickClose.bind(this);
    }
    shouldComponentUpdate(nextProps,nextSate){
        return (
            this.props.popup !== nextProps
        );
    }
    _onClickClose(){
        this.props.dispatch({ 
            type: PopupActions.IS_SHOW_HIDDEN
        });
    }
    render() {
        console.log(this.props);
        return (
            <div className={"modal fade in " + (this.props.popup.isShowHidden ? " show" : "" )} 
                id="exampleModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                                {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this._onClickClose} className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
      )
    }
}
export default Modal