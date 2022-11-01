import React from "react"
import 'aos/dist/aos.css';
//https://stackoverflow.com/a/42569645
class Effects extends React.Component {

    componentDidMount() {
        const AOS = require('aos');
        this.aos = AOS
        this.aos.init()
    }
    componentDidUpdate() {
        this.aos.refresh()
    }
    render () {
        return (
            <>

            </>
        )}
}
export default Effects