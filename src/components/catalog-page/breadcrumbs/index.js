import React from 'react';

class Breadcrumbs extends React.PureComponent {
    render() {
        const { 
            breadcrumbs,
            onClick 
        } = this.props;
        return (
            <div>
                 {breadcrumbs.length > 0 ?
                    <React.Fragment>
                        {breadcrumbs.map ((el, i, list) =>
                             <React.Fragment>
                                <span key={el} onClick={() => onClick(el)}>
                                    {el.name}
                                </span>
                                {list.length - 1 !== i && <span key={`arrow ${i}`}> => </span>}
                            </React.Fragment>
                        )}
                    </React.Fragment>
            : null}
            </div>
        )
    }
}

export default Breadcrumbs;