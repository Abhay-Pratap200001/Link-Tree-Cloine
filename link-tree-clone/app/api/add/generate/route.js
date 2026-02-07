import clientPromise from "@/lib/mongodb";


export async function POST(request){
    try {
        const body = await request.json()
        const client = await clientPromise
        const db = client.db('Bittree')
        const collection = db.collection('links') 
        const result = await collection.insertOne(body)
        return Response.json({message: 'link added', success:true, result, error:false})
    } catch (error) {
        console.log(error);
           
    }
}