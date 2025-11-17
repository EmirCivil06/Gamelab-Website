import React, { useState } from "react";

export default function Admin({username, AdminPassword}) {
    const nameInput = <label>Lütfen isim giriniz:<br></br><input className="username"/></label>;
    const passwordInput = <label>Lütfen şifre giriniz:<br></br><input className="password"/></label>;
    
    const isAdmin = nameInput == "emir" && passwordInput == "1234"
    

    return (<>
        {nameInput}
        {passwordInput}
        <div>
            {isAdmin ? <div>evet adminsiniz</div> : <div> hayır admin değilsiniz</div>}
        </div>
    </>)
}