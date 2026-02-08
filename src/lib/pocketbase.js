import PocketBase from "pocketbase"

// !! ŞU ANDA SADECE LOCALHOST ÜZERİNDEN AKTİF OLUR
// !! DOMAINE AKTARILIRKEN ÖZEL KONFİGÜRASYON GEREKİR
const pb = new PocketBase('http://127.0.0.1:8090');

export default pb;