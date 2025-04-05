
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminSettingsPage = () => {
  const form = useForm();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your website settings.</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Website Information</CardTitle>
              <CardDescription>
                Update your website's basic information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="site-name" className="text-sm font-medium">Site Name</label>
                    <Input id="site-name" defaultValue="The Ambitious Academy" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="tagline" className="text-sm font-medium">Tagline</label>
                    <Input id="tagline" defaultValue="Premier Legal Education" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">Site Description</label>
                  <Textarea 
                    id="description"
                    rows={3}
                    defaultValue="Advance your legal career with specialized courses from The Ambitious Academy"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">Contact Email</label>
                  <Input id="contact-email" defaultValue="contact@ambitiousacademy.edu" />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Social Media Links</CardTitle>
              <CardDescription>
                Connect your social media accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn</label>
                    <Input id="linkedin" defaultValue="https://linkedin.com/company/ambitious-academy" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="twitter" className="text-sm font-medium">Twitter</label>
                    <Input id="twitter" defaultValue="https://twitter.com/AmbitiousAcademy" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="facebook" className="text-sm font-medium">Facebook</label>
                    <Input id="facebook" defaultValue="https://facebook.com/AmbitiousAcademy" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="instagram" className="text-sm font-medium">Instagram</label>
                    <Input id="instagram" defaultValue="https://instagram.com/AmbitiousAcademy" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Theme Settings</CardTitle>
              <CardDescription>
                Customize your website's appearance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Color</label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-academy-teal"></div>
                    <Input defaultValue="#38B2AC" className="w-auto" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Logo</label>
                  <div className="flex items-center gap-4">
                    <img 
                      src="https://lovable.dev/opengraph-image-p98pqg.png" 
                      alt="Current Logo"
                      className="h-12 w-auto"
                    />
                    <Button variant="outline">Change Logo</Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Font Family</label>
                  <select className="w-full rounded-md border border-gray-300 p-2">
                    <option>System Default</option>
                    <option>Sans-serif</option>
                    <option>Serif</option>
                    <option>Montserrat</option>
                    <option>Roboto</option>
                  </select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure email and system notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">New Course Enrollment</h3>
                    <p className="text-sm text-gray-500">Receive notifications when a student enrolls in a course</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="enrollment" className="rounded border-gray-300" defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Course Reviews</h3>
                    <p className="text-sm text-gray-500">Receive notifications when a student leaves a review</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="reviews" className="rounded border-gray-300" defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Blog Comments</h3>
                    <p className="text-sm text-gray-500">Receive notifications for new blog comments</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="comments" className="rounded border-gray-300" defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Emails</h3>
                    <p className="text-sm text-gray-500">Receive updates about promotions and new features</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="marketing" className="rounded border-gray-300" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSettingsPage;
