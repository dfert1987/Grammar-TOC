import React from 'react';
import DataIcon from '../Assets/Icons/DataIcon.png';
import PDFIcon from '../Assets/Icons/PDFIcon.png';
import PPTIcon from '../Assets/Icons/PPTIcon.png';
import '../Styles/Intro.css';

const Intro = () => {
    return (
        <div className='intro-container vert'>
            <div className='intro-container'>
                <section className='blurb-container'>
                    <p className='blurb'>
                        The{' '}
                        <b className='bold-blurb'>
                            Interactive Grammar Lessons
                        </b>{' '}
                        are designed to help students develop proficiency in
                        English grammar. Modules allow students to learn the
                        different aspects of English grammar and practice and
                        apply what they have learned. Additional resources for
                        each Module topic provide the instruction and practice
                        in printable format as well as remediation and
                        assessment.
                    </p>
                </section>
                <section className='key-container'>
                    <div className='key-item top-item'>
                        <span className='key-row left'>
                            <img
                                className='key-icon'
                                alt='data icon'
                                src={DataIcon}
                            />
                            <p className='key-text top-text'>
                                provides data in reports*
                            </p>
                        </span>
                        <span className='key-row right'>
                            <img
                                className='key-icon-med'
                                alt='PPT icon'
                                src={PPTIcon}
                            />
                            <p className='key-text top-text right'>slides</p>
                        </span>
                    </div>
                    <div className='key-item'>
                        <img
                            className='key-icon-small'
                            alt='PDF icon'
                            src={PDFIcon}
                        />
                        <p className='key-text bottom-key'>printable</p>
                    </div>

                    <hr className='solid' aria-hidden='true' />
                    <p className='asterisk'>
                        * Resources that provide data can be found by searching
                        in the <b>Grammar Resources</b> tile on <b>Ed</b>.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Intro;
