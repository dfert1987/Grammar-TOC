import React, { useEffect, useState } from 'react';
import '../../Styles/Table.css';

const TableBanner = ({ data }) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (data[0]) {
            const tableTitle = data[0].MODULE;
            setTitle(tableTitle);
        }
    }, [data]);

    return (
        <thead className='table-banner'>
            <tr className='table-banner-text'>
                <td className='module-subheader'>INTERACTIVE GRAMMAR MODULE</td>
                <td className='module-header'>{title}</td>
            </tr>
        </thead>
    );
};

export default TableBanner;
