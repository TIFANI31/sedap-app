export default function ContactUs() {
    return (
        <div className="card">
            <h1>Hubungi Kami</h1>
            <NameInput />
            <EmailInput />
            <PhoneInput/>
            <QuestionInput />
            <SubmitButton />
        </div>
    );
}

function NameInput({ name, setName }) {
    return (
        <div className="input-group">
            <label>Nama:</label>
            <input
                type="text"
                value={name}
                placeholder="Masukkan nama Anda"
                className="input-field"
            />
        </div>
    );
}

function EmailInput({ email, setEmail }) {
    return (
        <div className="input-group">
            <label>Email:</label>
            <input
                type="email"
                value={email}
                placeholder="Masukkan email Anda"
                className="input-field"
            />
        </div>
    );
}

function PhoneInput({ phone, setPhone }) {
    return (
        <div className="input-group">
            <label>Kontak:</label>
            <input
                type="phone"
                value={phone}
                placeholder="Masukkan kontak Anda"
                className="input-field"
            />
        </div>
    );
}

function QuestionInput({ question, setQuestion }) {
    return (
        <div className="input-group">
            <label>Pertanyaan:</label>
            <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Tuliskan pertanyaan Anda di sini"
                className="textarea-field"
            />
        </div>
    );
}

function SubmitButton({ onClick }) {
    return (
        <div className="submit-button">
            <button onClick={onClick} className="button">Kirim</button>
        </div>
    );
}