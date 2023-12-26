import React, { useState } from 'react'
import TransactionModal from '../components/TransactionModal'

const Transactions = () => {
    const [showModal, setShowModal] = useState(false)

    const addTransaction = () => {
        setShowModal(true)
    }

    const closeModal = () => setShowModal(false)

  return (
    <div>
        <h1>Transactions</h1>
        <br />
        <button className='border border-1 border-black p-1 ml-2' onClick={addTransaction}>Add Transaction</button>
        {showModal && <TransactionModal closeModal={closeModal} />}
    </div>
  )
}

export default Transactions