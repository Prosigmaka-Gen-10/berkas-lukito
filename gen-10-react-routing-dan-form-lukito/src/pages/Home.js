import React, {useState} from "react";
import {Link} from "react-router-dom";

function Home() {
    const [nama, setNama] = useState("");
    const [hari, setHari] = useState("");
    const [gender, setGender] = useState("");
    const [idPhoneNum, setIdPhuneNum] = useState("")
    const [phoneNum, setPhoneNum] = useState("")
    const [favColor, setFavColor] = useState("")
    const [arrVisitor, setArrVisitor] = useState([]);

    function handleInputNama(eventTerserah) {
        setNama(eventTerserah.target.value);
    }

    function handleInputphoneNum(inputPhoneNum) {
        setPhoneNum(inputPhoneNum.target.value);
    }

    function handleFavColor(thisMyFavCol){
        setFavColor(thisMyFavCol.target.value)
    }

    function handleSubmit() {
        let visitor = [...arrVisitor];
        const dataLoad = {
            namaAnda: nama,
            hariAkses: hari,
            gender: gender,
            color: favColor.toString(),
            noTelp: idPhoneNum + phoneNum.toString()
        }
        visitor.push(dataLoad)
        console.log(dataLoad);
        setArrVisitor(visitor)
        alert("Your data has been filled ")

    }

    return <>

        <label>
            Nama Anda: <br/>
            <input type={"text"} onChange={handleInputNama} value={nama}/>
        </label>

        <br/>
        <br/>

        <label>Nasukkan No.Hp Anda: <br/>
            <select onChange={event => setIdPhuneNum(event.target.value)} value={idPhoneNum}>
                <option value={"+62"}>+62</option>
                <option value={"+682"}>+682</option>
                <option value={"+506"}>+506</option>
                <option value={"+53"}>+53</option>
                <option value={"+357"}>+357</option>
            </select>

            <input type={"number"} placeholder={"123-4567-8901"}
                   required onChange={handleInputphoneNum} value={phoneNum}/>


        </label>

        <br/>
        <br/>

        <label>
            Hari: <br/>
            <select onChange={event => setHari(event.target.value)} value={hari}>
                <option value={"senin"}>Senin</option>
                <option value={"selasa"}>Selasa</option>
                <option value={"rabu"}>Rabu</option>
                <option value={"kamis"}>Kamis</option>
                <option value={"jumat"}>Jumat</option>
            </select>
        </label>

        <br/>
        <br/>

        Jenis Kelamin: <br/>
        <label>
            <input
                type={"radio"}
                value={"l"}
                name={"gender"}
                onChange={event => setGender(event.target.value)}
                checked={gender === "l"}/>
            Laki-laki
        </label>
        &nbsp;&nbsp;
        <label>
            <input
                type={"radio"}
                value={"p"}
                name={"gender"}
                onChange={event => setGender(event.target.value)}
                checked={gender === "p"}/>
            Perempuan
        </label>

        <br/>
        <br/>

        <label>
           Pilih warna kesukaanmu: <br/>
            <input type={"color"} onChange={handleFavColor} value={favColor}/>
        </label>

        <br/>
        <br/>

        <button onClick={handleSubmit}>Submit</button>

        <br/>
        <br/>

        {arrVisitor.length > 0 && arrVisitor[arrVisitor.length - 1].namaAnda !== ""
        && arrVisitor[arrVisitor.length - 1].hariAkses !== ""
        && arrVisitor[arrVisitor.length - 1].gender !== ""
        && arrVisitor[arrVisitor.length - 1].noTelp !== ""
        && arrVisitor[arrVisitor.length - 1].color.toString() !== ""?
            <div>
                <p>Click button below to see Catalog</p>
                <Link to={"/catalog"}>
                    <button>Click Here</button>
                </Link>
            </div>
            :
            <div>
                <br/>
                <br/>
                <button> anda belum isi data</button>
            </div>
        }
    </>
}

export default Home