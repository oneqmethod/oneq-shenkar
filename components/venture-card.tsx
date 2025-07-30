import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Users } from "lucide-react"

interface VentureCardProps {
  name: string
  field: string
  founders: string[]
  vision: string
  problem: string
  solution: string
  brainshopUrl: string
  status?: string
}

export function VentureCard({
  name,
  field,
  founders,
  vision,
  problem,
  solution,
  brainshopUrl,
  status
}: VentureCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-accent transition-colors">
              {name}
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              {field}
            </Badge>
            {status && (
              <Badge variant="outline" className="text-xs">
                {status}
              </Badge>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{founders.join(", ")}</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-2 text-primary">Vision</h4>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {vision}
          </p>
        </div>
        
        <div>
          <h4 className="font-medium text-sm mb-2 text-primary">Problem & Solution</h4>
          <p className="text-sm text-muted-foreground line-clamp-4">
            <span className="font-medium">Problem:</span> {problem.slice(0, 150)}...
            <br />
            <span className="font-medium">Solution:</span> {solution.slice(0, 150)}...
          </p>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button
          asChild
          className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
        >
          <a
            href={brainshopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            View on Brainshop
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}