import React from 'react';
import PropTypes from 'prop-types';
import ElementListContact from './elementListContact';

const ContactList = ({ listContacts, onDeleteContact }) =>
    (
        <>
            <ul>
                <ElementListContact propsListContacts={listContacts} onDeleteContact={onDeleteContact} />
            </ul>
        </>
    )

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    listContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}

export default ContactList;