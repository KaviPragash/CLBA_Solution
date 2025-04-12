import { Card, CardContent } from "@/components/ui/card";
import { BarChart4, ShoppingCart, Package, DollarSign } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">POS Dashboard</h1>
        <div className="text-sm text-gray-500">Today: April 8, 2025</div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <DollarSign className="text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Total Sales</p>
              <p className="text-xl font-semibold">LKR 125,400</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <ShoppingCart className="text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Total Orders</p>
              <p className="text-xl font-semibold">248</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <Package className="text-yellow-500" />
            <div>
              <p className="text-sm text-gray-500">Low Stock Items</p>
              <p className="text-xl font-semibold">5</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-4">
            <BarChart4 className="text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Avg. Order Value</p>
              <p className="text-xl font-semibold">LKR 505</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder Chart Section */}
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
        <div className="text-center text-gray-400 py-10">[Sales chart coming soon]</div>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-3">Invoice</th>
              <th className="py-2 px-3">Customer</th>
              <th className="py-2 px-3">Amount</th>
              <th className="py-2 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-3">#INV1023</td>
              <td className="py-2 px-3">John Doe</td>
              <td className="py-2 px-3">LKR 2,400</td>
              <td className="py-2 px-3 text-green-600">Paid</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-3">#INV1022</td>
              <td className="py-2 px-3">Jane Smith</td>
              <td className="py-2 px-3">LKR 1,750</td>
              <td className="py-2 px-3 text-yellow-600">Pending</td>
            </tr>
            <tr>
              <td className="py-2 px-3">#INV1021</td>
              <td className="py-2 px-3">Michael Lee</td>
              <td className="py-2 px-3">LKR 3,100</td>
              <td className="py-2 px-3 text-green-600">Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}