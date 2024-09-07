import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="bg-gray-50 p-6 font-sans">
      <div className="mb-6 flex justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">$ 12,300.00</h2>
          <p className="text-gray-500">Circulation on credit</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800">$ 6,160.00</h2>
          <p className="text-gray-500">Circulation on debit</p>
        </div>
      </div>
      
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg
            className=" h-5 w-5 text-gray-500"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span className="text-sm text-gray-600">01.01.23 - 02.02.23</span>
        </div>
        <div className="flex items-center space-x-2">
          <Input className="w-64" placeholder="Search" type="search" />
          <Button variant="outline">Export</Button>
        </div>
      </div>
      
      <table className="w-full">
        <thead>
          <tr className="border-b text-left text-sm font-medium text-gray-500">
            <th className="pb-2">Date</th>
            <th className="pb-2">Counterparty and description</th>
            <th className="pb-2 text-right">Amount ($)</th>
            <th className="pb-2 text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { date: "Jun 24, 2023", time: "10:00 am", company: "Globex Co.", description: "Invoice #12356489", amount: 2890.00, status: "received" },
            { date: "Jun 20, 2023", time: "11:00 am", company: "Amazon", description: "Purchase - Books and Electronics", amount: -49.00, status: "paid" },
            { date: "Jun 19, 2023", time: "2:00 pm", company: "Netflix", description: "Subscription - Monthly Membership", amount: -80.00, status: "paid" },
            { date: "Jun 18, 2023", time: "11:00 am", company: "Starbucks", description: "Purchase - Coffee and Food", amount: -3.00, status: "paid" },
            { date: "Jun 17, 2023", time: "10:00 am", company: "Globex Co.", description: "Invoice #12356489", amount: 1500.00, status: "paid" },
            { date: "Jun 14, 2023", time: "9:00 am", company: "Apple", description: "Purchase - App Store", amount: -200.00, status: "paid" },
            { date: "Jun 12, 2023", time: "6:00 pm", company: "Uber", description: "Ride - Shared Ride", amount: -40.00, status: "paid" },
            { date: "Jun 10, 2023", time: "11:00 am", company: "Marketplace", description: "Purchase", amount: -150.00, status: "paid" },
          ].map((transaction, index) => (
            <tr key={index} className="border-b text-sm">
              <td className="py-3">
                <div>{transaction.date}</div>
                <div className="text-gray-500">{transaction.time}</div>
              </td>
              <td className="py-3">
                <div className="font-medium">{transaction.company}</div>
                <div className="text-gray-500">{transaction.description}</div>
              </td>
              <td className={`py-3 text-right ${transaction.amount > 0 ? 'text-green-600' : ''}`}>
                {transaction.amount > 0 ? '' : '- '}
                {Math.abs(transaction.amount).toFixed(2)}
              </td>
              <td className="py-3 text-right">
                <span className={`inline-block rounded-full px-2 py-1 text-xs ${
                  transaction.status === 'received' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                }`}>
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}