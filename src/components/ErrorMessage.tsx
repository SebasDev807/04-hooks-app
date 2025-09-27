import { TriangleAlert } from "lucide-react";

interface Props {
    children: React.ReactNode;
}

export const ErrorMessage = ({ children }: Props) => {
    return (
        <div className="p-[2px] text-red-500 flex">
            <TriangleAlert />
            <div className="mx-auto">
                {children}
            </div>
        </div>
    )
}
