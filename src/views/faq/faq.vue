<script>
import Layout from "@/layouts";
import PageHeader from "@/components/page-header.vue";
import RightBar from "@/components/right-bar.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    Layout,
    PageHeader,
    RightBar,
  },
};
</script>

<template>
  <Layout>
    <div class="page-title-box">
      <BRow class="align-items-center">
        <BCol md="5">
          <PageHeader title="FAQs" pagetitle="Pages" />
        </BCol>
        <BCol md="auto" class="ms-auto">
          <RightBar />
        </BCol>
      </BRow>
    </div>
    <BCard no-body>
        <BCardBody>
            <BRow>
                <BCol xl="4">
                    <BCardTitle class="mb-3">General Questions</BCardTitle>
                    <p class="text-muted">General knowledge is information that has been accumulated over time through various mediums and sources. It excludes specialized learning that can only be obtained with extensive training and information confined to a single medium.</p>
                </BCol>
                <BCol xl="8">
                    <BAccordion class="accordion-border-box">
                        <BAccordionItem title="What are FAQ questions?" visible>
                            An FAQ page <b>(short for Frequently Asked Question page)</b> is a part of your website that provides answers to common questions, assuages concerns, and overcomes objections. It's a space where customers away from your sales-focused landing pages and homepage.
                        </BAccordionItem>
                        <BAccordionItem title="What is FAQ process?">
                            FAQ stands for Frequently Asked Questions. It's <b>your opportunity to communicate with the most important visitors to your website</b> – those who have begun the decision-making process about whether to do business with you can't fit elsewhere on their website.
                        </BAccordionItem>
                        <BAccordionItem title="What is the purpose of FAQ?">
                            The purpose of a FAQ is generally to provide information on frequent questions or concerns; however, the format is a useful means of organizing information, and text consisting of questions and their answers may thus be called a FAQ regardless.
                        </BAccordionItem>
                        <BAccordionItem title="What is an online FAQ?">
                            FAQs stand for frequently asked questions. It is one of the many crucial pages of your website. It gives your customers answers to recurring and common questions and addresses their concerns public product documentation that is released at the same time.
                        </BAccordionItem>
                        <BAccordionItem title="What are some design questions?">
                            These questions will help clients feel involved with the design process, and they'll also help you brainstorm ideas and fine-tune your creative output.
                        </BAccordionItem>
                        <BAccordionItem title="What are the 4 questions of design?">
                            The methodology I've found most successful, has been introduced by prof Jeanne Liedtka from Darden Business School and identifies four stages: What is?, What if?, What wows?, and What works?
                        </BAccordionItem>
                    </BAccordion>                    
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>

    <BCard no-body>
        <BCardBody>
            <BRow>
                <BCol xl="4">
                    <BCardTitle class="mb-3">Manage Account</BCardTitle>
                    <p class="text-muted">Cybersecurity experts recommend changing your password every three months. There may even be situations where you should change your password immediately, especially if a cybercriminal has access to your account.</p>
                </BCol>
                <BCol xl="8">
                    <BAccordion class="accordion-border-box">
                        <BAccordionItem title="What is account management process?">
                            If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words.
                        </BAccordionItem>
                        <BAccordionItem title="Why is account management important?" visible>
                            The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                        </BAccordionItem>
                        <BAccordionItem title="What is account manager role?">
                            he wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.
                        </BAccordionItem>
                        <BAccordionItem title="What is a key account strategy?">
                            Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                        </BAccordionItem>
                    </BAccordion>
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>

    <BCard no-body>
        <BCardBody>
            <BRow>
                <BCol xl="4">
                    <BCardTitle class="mb-3">Privacy & Security</BCardTitle>
                    <p class="text-muted">Privacy is the right to control how your information is viewed and used, while security is protection against threats or danger. In the digital world, security generally refers to the unauthorized access of data, often involving protection against hackers or cyber criminals.</p>
                </BCol>
                <BCol xl="8">
                    <BAccordion class="accordion-border-box">
                        <BAccordionItem title="Which is important privacy or security?" visible>
                            If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple their most common words.
                        </BAccordionItem>
                        <BAccordionItem title="What is security and privacy?">
                            The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.
                        </BAccordionItem>
                        <BAccordionItem title="How can I protect my privacy?">
                            He wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.
                        </BAccordionItem>
                        <BAccordionItem title="Why is privacy so important?">
                            Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis aliquam ultrices mauris.
                        </BAccordionItem>
                    </BAccordion>
                </BCol>
            </BRow>
        </BCardBody>
    </BCard>
</Layout>
</template>