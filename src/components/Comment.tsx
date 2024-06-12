import Giscus from "@giscus/react";

export const Comment = ({ theme }: { theme: string }) => {
  return (
    <Giscus
      id="comments"
      repo="charlesMYoung/comment"
      repoId="R_kgDOL338Cg"
      category="Announcements"
      categoryId="DIC_kwDOL338Cs4CfLVy"
      mapping="title"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
  );
};
