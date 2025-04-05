
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome to The Ambitious Academy admin panel.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">27</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Instructors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">6</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Course Enrollments</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Course</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>John Smith</TableCell>
                  <TableCell>Constitutional Law Fundamentals</TableCell>
                  <TableCell>April 2, 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sarah Johnson</TableCell>
                  <TableCell>Intellectual Property Rights</TableCell>
                  <TableCell>April 1, 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Michael Brown</TableCell>
                  <TableCell>Criminal Law Practice</TableCell>
                  <TableCell>March 30, 2025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Latest Blog Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Post Title</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Published</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>New Supreme Court Rulings</TableCell>
                  <TableCell>352</TableCell>
                  <TableCell>April 1, 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Legal Tech Trends 2025</TableCell>
                  <TableCell>271</TableCell>
                  <TableCell>March 28, 2025</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bar Exam Preparation Tips</TableCell>
                  <TableCell>198</TableCell>
                  <TableCell>March 25, 2025</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
