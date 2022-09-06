import React, {useState} from "react";
import {Link} from "react-router-dom";

function Home() {
    const [nama, setNama] = useState("");
    const [hari, setHari] = useState("");
    const [gender,setGender] = useState("");
    const [arrVisitor, setArrVisitor] = useState([]);

    function handleInputNama (eventTerserah){
        setNama(eventTerserah.target.value);
    }

    function handleSubmit(){
        let visitor = [...arrVisitor];
        const dataLoad = {
            namaAnda: nama,
            hariAkses: hari,
            gender: gender
        }
        visitor.push(dataLoad)
        console.log(dataLoad);
        setArrVisitor(visitor)

    }

    return <>

        <label>
            Nama Anda: <br/>
            <input type={"text"} onChange={handleInputNama} value={nama}/>
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
                checked={gender === "l"} />
                Laki-laki
        </label>
        &nbsp;&nbsp;
        <label>
            <input
                type={"radio"}
                value={"p"}
                name={"gender"}
                onChange={event => setGender(event.target.value)}
                checked={gender === "p"} />
            Perempuan
        </label>

        <br/>
        <br/>

        <button onClick={handleSubmit}>Submit</button>

        <br/>
        <br/>

        {arrVisitor.length>0 &&arrVisitor[arrVisitor.length-1].namaAnda!==""
        &&arrVisitor[arrVisitor.length-1].hariAkses!==""
        &&arrVisitor[arrVisitor.length-1].gender!==""?
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
                <button> anda belum isi data </button>
            </div>
            }
    </>
}

export default Home