import { PINATA_KEY } from "../constants/config";
import axios from 'axios';
export const uploadToIPFS = (data: File, progress: any) => new Promise(async (resolve, reject) => {
    const formData = new FormData();
    formData.append('file', data)
    formData.append('pinataMetadata', JSON.stringify({ name: 'vulcan.launchpad' }));
    formData.append('pinataOptions', JSON.stringify({ cidVersion: 0 }));

    const res = await axios
        .post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
            maxBodyLength: Infinity,
            headers: {
                //@ts-ignore
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${PINATA_KEY}`,
            },
            onUploadProgress: progress
        }).catch(err => {
            reject("IPFS projectInfo upload failed");
        });
    //@ts-ignore
    resolve("https://ipfs.io/ipfs/" + res.data.IpfsHash);
});