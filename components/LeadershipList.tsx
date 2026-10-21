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
                  <Avatar className="w-52 h-52 mx-auto mb-4 rounded-2xl overflow-hidden transition-transform group-hover:scale-105">
                    <AvatarImage
                      src={leader.image}
                      alt={leader.name}
                      className={`w-full h-full object-cover object-center ${
                        ["Juan Rodriguez", "Matias Castellanos"].includes(leader.name)
                          ? "scale-125"
                          : ""
                      }`}
                    />
                    <AvatarFallback className="rounded-2xl">
                      {leader.name === "Vacant"
                        ? "?"
                        : leader.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <Badge variant="secondary" className={`${leader.board === "SHPE" ? 'bg-teal-100 text-teal-800' 
                      : 'bg-pink-100 text-pink-800'}`}>
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