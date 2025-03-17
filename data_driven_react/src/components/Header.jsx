import globe from '../assets/img/globe.png'


function HeaderComponent() {

    return(
        <header>
            <img src={globe} alt="Globe Icon" />
            <h1>My Travel Journal</h1>
        </header>
    )

}
export default HeaderComponent