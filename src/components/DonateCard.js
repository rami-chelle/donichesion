import { useState, useEffect } from 'react'
import axios from 'axios'


import('./DonateCard.css')



const DonateCard = ({postId,onClickdisplayDonateProps}) => {

    const [donation, setDonation] = useState(0)
    const [donor, setDonor] = useState('')


    useEffect(() => {
        const donorLocal = localStorage.getItem('userId');
            setDonor(donorLocal);       
            console.log(donorLocal)    
        }, []);



    const submitDonation = () => {
        if( donation === 0){
                return alert('Enter amount to proceed')
        }

        axios.post('http://localhost:8000/api/v1/donations/add', {
            postId: postId,
            donor: donor,
            donationAmount: donation
    })
    // .then( result => {
    //     axios.put(`http://localhost:8000/api/v1/posts/${postId}/donations/${result.data._id}`)
    //     console.log(result.data._id)
    //     alert(`Thank you for donating!`);
    // })
    onClickdisplayDonateProps()
    }



    return (
        <div className='donate-background'>


            <div className="donate-card-container">

                <div className="donate-card-top">
                    <h2 className="donate-question"> How much do you want to give? </h2>

                    <h2 className='close-button' onClick={onClickdisplayDonateProps}> X </h2>
                </div>

                <div className="donate-card-mid">
                    <img
                        className='donate-card-img'
                        src='https://res.cloudinary.com/dsn8zvh4a/image/upload/v1669781800/donate-box_uafiqx.png'
                        alt='donation'
                    />
                </div>

                <div className="donate-card-bottom">

                    <form className='donation-form'
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}>

                        <input
                            className='donate-input'
                            required
                            type='number'
                            value={donation}
                            onChange={(e) => setDonation(e.target.value)}
                        />


                        <div className='Button-container'>
                            <button className='donate-button'
                                type='submit'
                                onClick={(e) => {
                                    e.preventDefault();
                                    submitDonation();
                                }}
                            >DONATE
                            </button>

                            
                        </div>



                    </form>

                </div>

            </div>

        </div>




    )



}


export default DonateCard