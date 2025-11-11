
export default function Admin({username, AdminPassword}) {
    const pageItems = [<>
    <input>Lütfen isim giriniz.</input>
    <input>Lütfen şifre giriniz.</input>
    </>]

    return (<>
    <label>Lütfen isim giriniz.<input className="username"/></label>
    <br></br>
    <label>Lütfen şifre giriniz.<input className="password"/></label>
    </>);
}