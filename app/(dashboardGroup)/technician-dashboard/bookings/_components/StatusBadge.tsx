import { Badge } from "@/components/ui/badge";

type Props = {
  status:
    | "PENDING"
    | "ACCEPTED"
    | "DECLINED"
    | "IN_PROGRESS"
    | "COMPLETED";
};

export function StatusBadge({ status }: Props) {
  switch (status) {
    case "PENDING":
      return (
        <Badge
          variant="secondary"
          className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
        >
          Pending
        </Badge>
      );

    case "ACCEPTED":
      return (
        <Badge
          className="bg-blue-600 hover:bg-blue-600"
        >
          Accepted
        </Badge>
      );

    case "IN_PROGRESS":
      return (
        <Badge
          className="bg-purple-600 hover:bg-purple-600"
        >
          In Progress
        </Badge>
      );

    case "COMPLETED":
      return (
        <Badge
          className="bg-green-600 hover:bg-green-600"
        >
          Completed
        </Badge>
      );

    case "DECLINED":
      return (
        <Badge
          variant="destructive"
        >
          Declined
        </Badge>
      );

    default:
      return <Badge>{status}</Badge>;
  }
}