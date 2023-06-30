import { uploadToBunny } from 'upload-to-bunny';


async () => {
    await uploadToBunny('/nft', 'nft', {
        storageZoneName: 'vallhalla',
        cleanDestination: true,
        accessKey: 'c4bfefbd-42af-4025-bb0f6a3c963a-6261-40fd',
        maxConcurrentUploads: 10
    })
}