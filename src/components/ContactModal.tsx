import { useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string[];
  budget?: string;
  message: string;
}

const PROJECT_TYPES = [
  "Web Application",
  "Mobile App",
  "AI Solution",
  "Platform Development",
  "Brand Strategy",
  "UI/UX Design",
  "Web Development",
  "System Integration",
  "Consulting",
];

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: [],
      budget: "",
      message: "",
    },
  });

  const selectedProjectTypes = form.watch("projectType") || [];

  const toggleProjectType = (type: string) => {
    const current = form.getValues("projectType") || [];
    const updated = current.includes(type)
      ? current.filter((t) => t !== type)
      : [...current, type];
    form.setValue("projectType", updated);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with formatted email body
      const subject = encodeURIComponent(`New Contact Form Submission from ${data.name}`);
      const projectTypesText = data.projectType && data.projectType.length > 0
        ? data.projectType.join(", ")
        : "";
      const body = encodeURIComponent(
        `Hello Broadpath Team,

I'm reaching out through your website contact form.

Name: ${data.name}
Email: ${data.email}
${data.company ? `Company: ${data.company}` : ""}
${projectTypesText ? `Project Type(s): ${projectTypesText}` : ""}
${data.budget ? `Budget: ${data.budget}` : ""}

Message:
${data.message}

---
Sent from the Broadpath website contact form.`
      );

      window.location.href = `mailto:hello@broadpath.dev?subject=${subject}&body=${body}`;
      
      setSubmitStatus("success");
      setTimeout(() => {
        form.reset();
        onOpenChange(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-black border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-white/70">
            Tell us about your project and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Your name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                        placeholder="your.email@example.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Company</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Your company"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-white">Project Type</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-full justify-between bg-black/50 border-white/20 text-white hover:bg-black/70",
                              !selectedProjectTypes.length && "text-white/40"
                            )}
                          >
                            {selectedProjectTypes.length > 0
                              ? selectedProjectTypes.length === 1
                                ? selectedProjectTypes[0]
                                : `${selectedProjectTypes.length} selected`
                              : "Select project types..."}
                            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0 bg-black border-white/20">
                        <div className="max-h-[300px] overflow-auto p-2">
                          {PROJECT_TYPES.map((type) => (
                            <div
                              key={type}
                              className="flex items-center space-x-2 p-2 hover:bg-white/5 rounded-sm cursor-pointer"
                              onClick={() => toggleProjectType(type)}
                            >
                              <Checkbox
                                checked={selectedProjectTypes.includes(type)}
                                onCheckedChange={() => toggleProjectType(type)}
                                className="border-white/30 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                              />
                              <label className="text-sm text-white cursor-pointer flex-1">
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                        {selectedProjectTypes.length > 0 && (
                          <div className="border-t border-white/20 p-2">
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                form.setValue("projectType", []);
                              }}
                              className="w-full text-white/70 hover:text-white hover:bg-white/10 text-xs"
                            >
                              Clear selection
                            </Button>
                          </div>
                        )}
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Budget Range</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-black/50 border-white/20 text-white placeholder:text-white/40"
                      placeholder="€5k-€10k, €10k-€25k, €25k+, etc."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message *</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-black/50 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitStatus === "success" && (
              <div className="text-green-400 text-sm">
                Opening your email client...
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-400 text-sm">
                Something went wrong. Please try again.
              </div>
            )}

            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-500 text-black hover:bg-green-600"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;

