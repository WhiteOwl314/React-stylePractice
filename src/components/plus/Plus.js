import React from 'react';
import './Plus.scss';
import classNames from 'classnames';

function Plus({children, size, color, outline,fullWidth,...rest}) {
    return (
        <button
            className={classNames(
                'Plus',size, color, {outline, fullWidth}
            )}
            {...rest}
        >
            {children}
        </button>
    )
}

Plus.defaultProps = {
    size: 'medium',
    color: 'yellow'
}

export default Plus;