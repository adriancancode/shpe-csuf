import alumni from '@/app/alumni/alumniData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin } from 'lucide-react';
import { ScrollReveal } from '@/components/smooth-scroll';

export default function AlumniList(){
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumni.map((alum, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.1}>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardHeader>
                <CardTitle className="text-lg">{alum.name}</CardTitle>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-center text-xl">
                  {alum.graduated}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                    {alum.currentRole}  
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a href={alum.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-gray-400 hover:text-white hover:bg-gray-800"
                    >
                        <Linkedin className="h-5 w-5" />
                    </Button>
                </a>
                
              </CardFooter>
            </Card>
          </ScrollReveal>
        ))}
    </div>
    );
    
}