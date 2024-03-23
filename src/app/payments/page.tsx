import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import ESGScore from './ESG_score.json';
async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    const data = ESGScore
 const bob = ["Alphabet (A)", "Apple", "NVIDIA", "Samsung", "SAP", "Porsche", "Siemens", "Tesla"]
    const arrayOfObjects = Object.keys(data).map((key, index) => {

        return {
            id: key,
            rating: data[key][0],
            score: data[key][1],
            bob: key, // Assuming email is constant for all objects
            isin:bob[index]
        };
    });

    return arrayOfObjects
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
