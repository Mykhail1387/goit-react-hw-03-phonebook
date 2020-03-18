import React from 'react';
import PropTypes from 'prop-types';
import styles from './elementListContacts.module.css';

const ElementListContact = ({ propsListContacts, onDeleteContact }) => (
    <>
        {propsListContacts.map(list =>
            <li className={styles.list} key={list.id}>{list.name}: {list.number}
                <button className={styles.btn} type="button" onClick={() => onDeleteContact(list.id)}>delete</button></li>
        )}
    </>
)

ElementListContact.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    propsListContacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}

export default ElementListContact;