import React from "react"

import { cn } from "@/ui-base/lib/util/utils";
import { Avatar, AvatarFallback, AvatarImage, AvatarProps } from "../avatar"

interface ChatBubbleAvatarProps extends AvatarProps {
  src?: string
  fallback?: string
}

const ChatBubbleAvatar = React.forwardRef<
  React.ElementRef<typeof Avatar>,
  ChatBubbleAvatarProps
>(({ src, fallback, className, ...props }, ref) => (
  <Avatar {...props} ref={ref} className={cn("chat-image", className)}>
    {src ? <AvatarImage src={src} /> : null}
    {fallback ? <AvatarFallback>{fallback}</AvatarFallback> : null}
  </Avatar>
))

ChatBubbleAvatar.displayName = "ChatBubbleAvatar"

export default ChatBubbleAvatar
