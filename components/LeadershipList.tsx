import leadership from '@/app/leadership/leadershipData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/smooth-scroll';

export default function LeadershipList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4 transition-transform group-hover:scale-110">
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback>{leader.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                      {leader.role}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {leader.bio}
                    </CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
    </div>
  );
}