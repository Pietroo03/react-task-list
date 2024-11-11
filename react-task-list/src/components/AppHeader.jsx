import reactLogo from '../assets/react.svg'
export default function Appheader() {

    const title = 'JSX Task List'

    return (
        <header>
            <img src={reactLogo} alt="" />
            <h1>{title}</h1>
        </header>
    )

}