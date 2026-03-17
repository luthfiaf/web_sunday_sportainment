# Cara Setup Google Form untuk Pendaftaran Event

## Langkah 1: Buat Google Form

1. Buka https://forms.google.com
2. Buat form baru
3. Buat 11 field dengan tipe **Short Answer** (Jawaban Singkat):

```
1. Nama Tim
2. Nama Lengkap Kapten
3. Tempat Lahir
4. Tanggal Lahir (gunakan Response Validation untuk format date)
5. Agama (Dropdown)
6. Pekerjaan
7. Alamat Lengkap (Paragraph)
8. Email (Response Validation: Email)
9. No. WhatsApp (Response Validation: Number)
10. Nama Pelatih
11. Asal Tim / Kota
```

## Langkah 2: Dapatkan Field Names

1. Klik titik 3 (⋮) di kanan atas form
2. Pilih **"Get pre-filled link"**
3. Isi semua field dengan data dummy:
   - Nama Tim: `TEST_TEAM`
   - Nama Kapten: `TEST_CAPTAIN`
   - Tempat Lahir: `TEST_PLACE`
   - Tanggal Lahir: `2000-01-01`
   - Agama: `Islam`
   - Pekerjaan: `TEST_JOB`
   - Alamat: `TEST ADDRESS`
   - Email: `test@example.com`
   - No. WhatsApp: `081234567890`
   - Nama Pelatih: `TEST_COACH`
   - Asal Tim: `TEST_CITY`

4. Klik **"Get Link"**
5. Copy link yang muncul

## Langkah 3: Extract Field Names

Link akan terlihat seperti ini:
```
https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.1234567890=TEST_TEAM&entry.2345678901=TEST_CAPTAIN&entry.3456789012=TEST_PLACE&entry.4567890123=2000-01-01&entry.5678901234=Islam&entry.6789012345=TEST_JOB&entry.7890123456=TEST+ADDRESS&entry.8901234567=test%40example.com&entry.9012345678=081234567890&entry.0123456789=TEST_COACH&entry.1122334455=TEST_CITY
```

Extract field names setelah `entry.`:
- `entry.1234567890` = Nama Tim
- `entry.2345678901` = Nama Kapten
- `entry.3456789012` = Tempat Lahir
- `entry.4567890123` = Tanggal Lahir
- `entry.5678901234` = Agama
- `entry.6789012345` = Pekerjaan
- `entry.7890123456` = Alamat
- `entry.8901234567` = Email
- `entry.9012345678` = No. WhatsApp
- `entry.0123456789` = Nama Pelatih
- `entry.1122334455` = Asal Tim

## Langkah 4: Dapatkan Form Action URL

1. Buka Google Form
2. Klik **Send** (Kirim)
3. Pilih tab **<> (Embed HTML)**
4. Lihat URL di iframe `src`:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXX/viewform?embedded=true
   ```

5. Ganti `/viewform?embedded=true` menjadi `/formResponse`:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXX/formResponse
   ```

## Langkah 5: Update Kode

Edit file `src/components/EventRegistration.jsx`:

```javascript
// GANTI dengan Form Action URL Anda
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSd_.../formResponse'

// GANTI dengan field names Anda
const fieldNames = {
  namaTim: 'entry.1234567890',
  namaKapten: 'entry.2345678901',
  tempatLahir: 'entry.3456789012',
  tanggalLahir: 'entry.4567890123',
  agama: 'entry.5678901234',
  pekerjaan: 'entry.6789012345',
  alamat: 'entry.7890123456',
  email: 'entry.8901234567',
  noWa: 'entry.9012345678',
  namaPelatih: 'entry.0123456789',
  asalTim: 'entry.1122334455',
}
```

## Langkah 6: Test

1. Jalankan website: `npm run dev`
2. Buka http://localhost:5173
3. Klik event → klik "Daftar"
4. Isi semua field
5. Klik "Kirim Pendaftaran"
6. Cek Google Form → Responses

## Catatan Penting:

- Pastikan semua field di Google Form **tidak required** (karena validasi sudah ada di frontend)
- Atau biarkan required, form akan tetap bisa submit
- Field type di Google Form sebaiknya semua **Short Answer** kecuali Alamat gunakan **Paragraph**
- Untuk dropdown Agama, gunakan Short Answer saja (user ketik manual)

## Troubleshooting:

**Data tidak masuk ke Google Form:**
- Cek field names sudah benar
- Cek Form Action URL sudah benar (harus /formResponse)
- Pastikan method POST dan mode: 'no-cors'

**Form tidak submit:**
- Cek console browser untuk error
- Pastikan semua field terisi
