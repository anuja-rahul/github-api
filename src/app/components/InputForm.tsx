"use client";

import {
  Button,
  Input,
  Card,
  CardFooter,
  Tabs,
  Tab,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function InputForm() {
  const [username, setUsername] = useState("");
  interface Profile {
    html_url: string;
    repos_url: string;
    login: string;
    avatar_url: string;
    followers_url: string;
  }

  interface Follower {
    login: string;
    avatar_url: string;
    html_url: string;
  }

  interface Repo {
    name: string;
    html_url: string;
  }

  const [profile, setProfile] = useState<Profile | { avatar_url?: string }>({});

  const [followers, setFollowers] = useState<Follower[]>([]);
  const [repo, setRepo] = useState();

  let tabs = [
    {
      id: "Followers",
      label: "followers",
    },
    {
      id: "Repositories",
      label: "repositories",
    },
  ];

  const searchProfile = async () => {
    try {
      // const res = await fetch(`https://api.github.com/users/${username}`);
      const res = await fetch(
        `https://api.github.com/search/users?q=${username}`
      );
      const data = await res?.json();
      console.log(data);
      setProfile(data?.items[0]);
      getFollowers();
      getRepos();
    } catch (err) {
      console.error(err);
    }
  };

  const getFollowers = async () => {
    try {
      if ("followers_url" in profile) {
        const res = await fetch(profile.followers_url);
        const data = await res?.json();
        console.log("38", data);
        setFollowers(data.items);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getRepos = async () => {
    try {
      if ("followers_url" in profile) {
        const res = await fetch(profile.repos_url);
        const data = await res?.json();
        console.log("56", data);
        setRepo(data.items);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full mx-auto h-full">
      <div className="flex flex-row justify-center items-center gap-4 w-4/5">
        <Input
          size="md"
          isRequired
          color="primary"
          variant="bordered"
          radius="lg"
          type="text"
          label="Your GitHub username"
          className="max-w-[220px]"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Button
          size="md"
          radius="full"
          color="primary"
          variant="shadow"
          className="bg-gradient-to-tr from-secondary-600 to-primary-500 text-white shadow-lg"
          onClick={searchProfile}
        >
          Click me
        </Button>
      </div>

      {/* {"login" in profile && <div>{JSON.stringify(profile)}</div>} */}
      {/* {JSON.stringify(followers)} */}

      {"login" in profile && profile.login ? (
        <div className="flex flex-col w-4/5 justify-center items-center flex-wrap">
          <Card isFooterBlurred radius="lg" className="border-none mb-6 ">
            <Image
              alt="Avatar"
              className="object-cover"
              height={200}
              src={profile.avatar_url}
              width={200}
            />
            <CardFooter
              className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large 
            bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10"
            >
              <p className="text-tiny text-slate-950 font-bold">
                {profile.login}
              </p>
              <Button
                className="bg-gradient-to-tr from-secondary-300 to-primary-300 text-white shadow-lg text-tiny"
                variant="bordered"
                color="primary"
                radius="full"
                size="sm"
              >
                <Link href={profile.html_url}>Visit</Link>
              </Button>
            </CardFooter>
          </Card>
          {/* Tabs */}
          <Tabs
            aria-label="Options"
            radius="full"
            variant="solid"
            color="secondary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.id} title={tab.label} className="w-4/5">
                {tab.id === "Followers" ? (
                  <div className="w-full flex flex-col items-center justify-center">
                    <Table
                      removeWrapper
                      aria-label="Example static collection table"
                      className="w-full"
                    >
                      <TableHeader>
                        <TableColumn>Avatar</TableColumn>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>Links</TableColumn>
                      </TableHeader>
                      <TableBody>
                        {followers.length > 0 ? (
                          <>
                            {followers.map((follower: Follower, id: number) => (
                              <TableRow key={id}>
                                <TableCell>
                                  <Avatar src={follower.avatar_url} size="md" />
                                </TableCell>
                                <TableCell>{follower.login}</TableCell>
                                <TableCell>
                                  <Link
                                    href={follower.html_url}
                                    target="_blank"
                                  >
                                    View Profile
                                  </Link>
                                </TableCell>
                              </TableRow>
                            ))}
                          </>
                        ) : (
                          <TableRow>
                            <TableCell>
                              <Avatar src="/" size="md" />
                            </TableCell>
                            <TableCell>None</TableCell>
                            <TableCell>
                              <Link href="/" target="_blank">
                                View Profile
                              </Link>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                ) : null}
              </Tab>
            ))}
          </Tabs>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
