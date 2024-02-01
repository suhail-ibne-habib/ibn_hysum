import React from 'react';
import Notice from './templates/Notice';
import LatestNotice from './templates/LatestNotice';

export default function Notices(){
    return(
        <div className="container notices">
            
            <div className="grid grid-col-xs-1 grid-col-sm-2">
                <div className="col gird-row-sm-2">
                    <Notice />
                </div>
                <div className="col">
                    <LatestNotice />
                </div>
            </div>
        </div>
    )
}