import './AulaCategory.css'

export default function AulasCategory() {
    return (
        <>
            <div className='cardCategory flex'>
                <div className='position-icon'>
                    <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="white"/>
                            <i></i>
                        </svg>
                    </div>
                </div>

                <div className='text-card'>
                    <h1 className='title-card'>
                        Físisca
                    </h1>

                    <small className='descrition-card'>
                        120 professores
                    </small>

                </div>

            </div>
        </>
    );
}
