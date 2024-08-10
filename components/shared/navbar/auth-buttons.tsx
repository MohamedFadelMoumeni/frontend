import { Button } from "@/components/ui/button";

export const AuthButtons = () => {
    return (
        <div className='flex gap-4 ml-6'>
            <Button  variant="outline" size="sm" className="px-5">
                <h3>Login</h3>
            </Button>
            <Button  variant="outline"size="sm" className="px-5">
                <h3>Join Us</h3>
            </Button>
        </div>
    )
}