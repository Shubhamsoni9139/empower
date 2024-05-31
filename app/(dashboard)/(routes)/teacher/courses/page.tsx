import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import NextLink from "next/link";

const CoursesPage = () => {
    return ( 
        <div className="p-6">
           <NextLink href="/teacher/create">

            <Button className="bg-black text-white " size="sm" variant="ghost">
                New Courses
                </Button>
                </NextLink>
        </div>
     );
}
 
export default CoursesPage;